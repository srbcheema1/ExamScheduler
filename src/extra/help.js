const helpmd = `
## **Instructions**

<br/>

##### **ExamScheduler** is a web-based tool to produce teacher-duty schedule in examination for a school/college.

The Main aim of this tool is to automate the process of teacher allotment during the exams in schools and colleges.
All you need to maintain is 4 input files out of which 3 will remain constant for an institute.
4 files are room list, work ratio, teachers list and schedule list.
- Room list - almost stays constant unless new rooms are added to the campus.
- Work ratio - will remain constant, values vary from institute to institute.
- Teachers list - just need a few updates every time, (even without this tool we need to maintain this list).
- Schedule list - the only list that we need to make new every time, believe me making schedule list is 100 times easier than original schedule by hand. 

<br/>

#### Key Features

- Same number of allotments to teachers with same rank.
- Teachers with more <code>work ratio</code> will get more allotments.
    - Ideal work ratio file contains work ratios in increasing order.
    - So teachers with higher designation will get fewer allotments(duties).
- Sum of ranks of teachers appointed in a room will be closer to average.
    - Two teachers with 1 and 1 rank will sum to 2.
    - Two teachers with 5 and 5 rank will sum to 10.
    - Instead of these combinations, we will allot teacher of rank 1 with teacher of rank 5.
    - Chances of clubbing lower rank teachers together are less.
- Keeping check of all these conditions manually will be a long task, we do it in seconds for you.
- **Don't worry** if you haven't got some terms, please **read full till end** and **read this again**.
    - Information provided below is <code>necessary</code> and <code>sufficient</code> to understand the beauty of tool.
    - **Please read everything carefully as each term has significance**. Once you understood it, you will love the tool.

<br/>

#### Inputs Required

- [Teachers_list](https://docs.google.com/spreadsheets/d/15bAOhsQVrBLxnEd4DI-PgnyDpE14taAN_ydTV9vniWY/edit?usp=sharing) - Includes <code>*teacher-name*</code> and <code>*rank*</code> as compulsory attributes. Other optional attributes may follow.

    | Name                   | Rank | Info                |
    | ---------------------- | ---- | --------------------|
    | Prof. Vinod Kumar      | 0    | Head of Department  |
    | Prof. Srb Cheema       | 1    | Software Designer   |
    | Prof. Rakesh Choudhary | 1    | Professor           |
    | Dr. Anjali Kaushal     | 2    | Associate Professor |
    | Mr. Prafull Dhiman     | 3    | Assistant Professor |

    - **Name** - This column contains name of teacher. *(Compulsory)*
        - In case two teachers have same name don't worry, teachers name need not to be unique.
        - You can mention extra info about teachers to identify in **info** column.
    - **Rank** - This column contains rank of teacher. *(Compulsory, Integer)*
        - Rank will determine the ratio of duties a teacher(generally rank can be decided by designation).
        - Teacher with rank <var>0</var> will be given no duties.
        - All ranks except <var>0</var> should be present in *work_ratio* file.
        - In case a teacher is not to be alloted, just give him 0 rank instead of removing his name.
    - **Info** - This is an optional column, may contain additional info(meta-data) about teacher.
        - This column gets printed in the output, else it doesn't affect the result logically.
        - may contain data like designation, department or any data you want to include in the output file.
    - **Optional** - Any other column than this will be ignored i.e. wont participate in output generation.



- [Schedule_list](https://docs.google.com/spreadsheets/d/1yyfRZFn-ZVB4889vxZ8bu1Tjj6p-qdMqxtfZfdXa554/edit?usp=sharing) - A 2D matrix including relation between a <code>*session*</code> and a <code>*room*</code>, value is **Y** if room is required on particular session.

    | Session\\Room | Room1 | Room2 | Room3 |
    | ------------- | ----- | ----- | ----- |
    | 01-04 (Mor.)  |       | Y     |       |
    | 01-04 (Eve.)  | Y     | Y     | Y     |
    | 02-04 (Mor.)  |       |       | Y     |
    | 02-04 (Eve.)  | Y     |       | Y     |

    - **Session Column** - This column contains session names. *(Compulsory, Unique)*
        - There are no restrictions on the naming convention.
        - Name them in any way, just keep them unique.
    - **Room Row** - This is the first row contains different room names. *(Compulsory, Unique)*
        - All the rooms mentioned here should be present in *Room_list* file.
    - **Inner Cells** - Inner cells may be **blank** **Y**, **y**, **N** or **n**.
        - **Blank** cell is regarded as **N**.
        - **Y** means that session requires that room for examination.
        - We can see that Room1 and Room3 are not required on 01-04 in the morning session.
        - Similarly, All rooms are required on 01-04 in the evening session.


- [Room_list](https://docs.google.com/spreadsheets/d/1caJK62qwDkqrdeZ8rUnaGs5JulMyxCFeaYhk7TrnsYc/edit?usp=sharing) - Includes <code>*room-name*</code> and <code>*teachers*</code> required as compulsory attributes. Other optional attributes may follow.

    | Name  | Teachers | Info         |
    | ----- | -------- | ------------ |
    | Room1 | 1        | Ground Floor |
    | Room2 | 2        | Top Floor    |
    | Room3 | 1        | Lab          |

    - **Name** - This column contains name of rooms *(Compulsory, Unique)*
        - All the room names present in *Session list* should be present here once.
    - **Teachers** - Number of teachers to be alloted in that room *(Compulsory, Integer)*
        - Instead of deleting a room we can just set Teachers to 0.
    - **Info** - this is optional column just for meta-data.*(Optional)*
        - It is ignored by the algorithm.
    - <code>Res</code> (Case Senstive) is a special room name for reserved duties.
        - It is adviced to use this name instead of other dummy rooms.


- [Work_ratio](https://docs.google.com/spreadsheets/d/139LZkE2maa5xi97H0Z4hxtvCVocsYLPAPH38n6RblLQ/edit#gid=0) - Includes <code>*rank*</code> and <code>*work_ratio*</code> as compulsory attributes. Other optional attributes may follow.

    | Rank | Work Ratio |
    | ---- | ---------- |
    | 1    | 100        |
    | 2    | 150        |
    | 3    | 200        |
    | 4    | 300        |

    - **Rank** - This column contains all the possible ranks *(Compulsory, Integer)*
        - Every Rank present in Teachers list should be present in this list.
    - **Work Ratio** - This column contains the ratio of work done by each rank holder *(Compulsory, Float)*
        - Higher the value of work ratio more are the chances of duty of that rank holder.
        - In example, Teacher with rank 3 will get twice more duties than rank 1 approximately.
        - In example, Teacher with rank 4 will get maximum number of duties and rank 1 will get the least number of duties.
        - Ideal work ratio file will have work ratios in <code>non-decreasing</code> order w.r.t <code>ranks</code>.


<br/>


#### Template Output
- [Output_file](https://docs.google.com/spreadsheets/d/1kxMy05dvqbor3EW1vEGFoNjI8n3haLKzu7OVdrbX-Dw/edit?usp=sharing) - Contains a 2D matrix of <code>*teachers*</code> and their <code>*duties*</code> in given <code>*session*</code>.

    | Name of Faculty        | Info  | 01-04 (Mor.) | 01-04 (Eve.) | 02-04 (Mor.) | 02-04 (Eve.) | Total |
    | ---------------------- | ----- | ------------ | ------------ | ------------ | ------------ | ----- |
    | Prof. Vinod Kumar      | HoD   | -            | -            | -            | -            | 0     |
    | Prof. Srb Cheema       | S.E.  | -            | Room1        | -            | -            | 1     |
    | Prof. Rakesh Choudhary | Prof  | -            | Room2        | -            | -            | 1     |
    | Dr. Anjali Kaushal     | Asso. | Room2        | Room2        | -            | Room3        | 3     |
    | Mr. Prafull Dhiman     | Assi. | Room2        | Room3        | Room3        | Room1        | 4     |

    - **Name of Faculty** - This column contains names of faculty as provided in <code>name</code> column of <code>Teachers list</code>.
    - **Info** - This column contains info about the teachers as provided in <code>info</code> column of <code>Teachers list</code>.
        - If this column is missing in Teachers list then this column will be blank here.
    - **Session Cols** - Session columns contain <var>room name</var> if the teacher has a duty in any room in that session.
        - In example, at *01-04 morning* session there is duty of **<var>Dr. Anjali</var>** and **<var>Mr. Prafull</var>** in **<var>Room2</var>**.
        - Similarly you can see **<var>Prof. Rakesh</var>** is having only 1 duty in **<var>Room1</var>** on *01-04 evening* session.
        - You can also notice the number of duties are proportional to ranks (work-ratio).
        - **<var>Prof Vinod</var>** is having no duty because he was having rank **<var>0</var>**, which means that teacher will get no duty.
    - **Total** - Total number of duties of a teacher during exams.
    - **Additionl Info** - There is some additional info about output at the bottom of output sheet.
        - Rank, Count, Avg Duties - Total Count and Average of each rank.
        - Type of Room, Number - <code>x,y,z</code> type denotes ranks of teachers alloted in it, number tells the total number of such rooms.

</br>

#### Possible Errors
- **Insufficient Data** - There is less than the required data to produce output.
    - **Too Few Columns** - There are less than required(compulsory) number of columns in your excel sheet.
    - **Too Few Rows** - There are less than required(compulsory) number of rows in your excel sheet.
    - **Value not present** - A value that is expected to be present is missing.
- **Invalid Data** - The data provided is invalid.
    - **Column should contain Integer/float value** - column is expecting Integer/float value but gets some other type of value.
    - **Can be blank, Y, y, N or n** - Cell of scheduler list contains invalid value, can contain only Y/y/N/n or can be left blank.
- **Required Unique value** - The col/row was expecting unique value but there is repetion of value somewhere.
- **Invalid Excel File** - The file provided is not a valid excel file with extension <code>xlsx</code> or <code>xls</code>.
- **Unable to load file** - There was error loading your input excel file.

<br/>

#### Important Note
- <code>Res</code> is a reserved room name, if you name a room as Res, it will be used for reserved purpose.
    - <var>"Res"</var> name (Case Senstive) is treated specially and teachers are alloted randomly and uniformly.
    - It can be used for emergency teacher duty, reserved duties can replace others.
    - It is adviced to create a room named Res instead of making rooms named RES or Res1 or other names for reserved room.
- The line numbers mentioned in error reports are not strictly the same as in excel sheet provided.
- Lines in excel sheet with first cell empty will be ignored (will not be counted).
- This property can be used to make comments in excel sheets you provide. To make comment just leave the first cell empty.

| Rank | Work Ratio      |
| ---- | --------------- |
| 1    | 100             |
|      | <code>This is a comment</code>          |
| 2    | 150             |
| 3    | 200             |
|      | We can use comments to keep notes.      |
|      | For example     |
|      | There is no Faculty of rank 4 right now |
| 4    | 300             |

- Rank 2 is actually on 4th line in excel sheet but will be treated as 3rd line.
- We can keep notes in our input files using comments.
- We can separate teachers of different departments by one empty row(the row with first cell empty is ignored).

<br/>

#### Contact Us
- For help, drop me your mail at [srbcheema2@gmail.com](mailto:srbcheema2@gmail.com?Subject=ExamScheduler), It would be better to attach your input files along with.
- For any Issues you may report at our github accounts:
    - [Web Site](https://github.com/srbcheema1/ExamScheduler)
    - [Server](https://github.com/srbcheema1/exam_scheduler_backend)
    - [Algorithm](https://github.com/srbcheema1/exam_scheduler)
- Contributors are welcome :)
- Give a star to our tool on [github](https://github.com/srbcheema1) if you liked it.
- We would be happy if you provide your valuable feedback regarding how we can improve our tool.
- If you liked the tool, please recommend it to other schools/colleges.

<br/>

#### Special Thanks
- [Dr. Naveen Chauhan](http://14.139.56.4/portfolios/index.php?/nith/dr-naveen-chauhan-)
- [Rajeev Kumar](http://14.139.56.4/portfolios/index.php?/nith/rajeev-kumar-)

<br/>

`
export default helpmd;
