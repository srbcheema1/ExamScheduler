const helpmd = `
## **Instructions**

<br/>

##### **ExamScheduler** is a web-based tool to produce teacher-duty schedule in examination for a school/college.

<br/>

#### Inputs Required

- [room_list](https://docs.google.com/spreadsheets/d/1caJK62qwDkqrdeZ8rUnaGs5JulMyxCFeaYhk7TrnsYc/edit?usp=sharing) - Includes <code>*room-name*</code> and <code>*teachers*</code> required as compulsory attributes. Other optional attributes may follow.
    - It should contain two lines
    - first line
    - second line

- [teachers_list](https://docs.google.com/spreadsheets/d/15bAOhsQVrBLxnEd4DI-PgnyDpE14taAN_ydTV9vniWY/edit?usp=sharing) - Includes <code>*teacher-name*</code> and <code>*rank*</code> as compulsory attributes. Other optional attributes may follow.

- [schedule_list](https://docs.google.com/spreadsheets/d/1yyfRZFn-ZVB4889vxZ8bu1Tjj6p-qdMqxtfZfdXa554/edit?usp=sharing) - A 2D matrix includeing relation between a <code>*session*</code> and a <code>*room*</code>, value is **Y** if room is required on particular session.

- [work_ratio](https://docs.google.com/spreadsheets/d/139LZkE2maa5xi97H0Z4hxtvCVocsYLPAPH38n6RblLQ/edit#gid=0) - Includes <code>*rank*</code> and <code>*work_ratio*</code> as compulsory attributes. Other optional attributes may follow.

<br/>

#### Template Output
- [Output_file](https://docs.google.com/spreadsheets/d/1kxMy05dvqbor3EW1vEGFoNjI8n3haLKzu7OVdrbX-Dw/edit?usp=sharing) - Contains a 2D matrix of <code>*teachers*</code> and their <code>*duties*</code> in given <code>*session*</code>.


`
export default helpmd;