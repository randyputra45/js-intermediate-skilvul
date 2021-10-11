class Student {
    constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
    }

    getCourseIndex(course) {
        const courseIndex = this.courseOfferings.findIndex((courseOffering) => {
          return courseOffering.course.getSubject() === course.getSubject();
        });
        return courseIndex;
    }

    takeNewCourse(course) {
        const checkCourse = this.courseOfferings.indexOf(course); //if course doesn't exist then return -1
        if (checkCourse == -1) { 
            this.courseOfferings.push(new CourseOffering(course));
            course.decreaseQuota();
        }
    }

    takeATest(course) {
        const courseIndex = this.getCourseIndex(course);
        if (courseIndex >= 0) {
            if (this.courseOfferings[courseIndex].attendance >= course.getAttendance()) {
                this.courseOfferings[courseIndex].grade = Math.floor(Math.random() * 101);
            }
            else {
                console.log("please fill your absen");
            }
        }
    }

    courseAttendance(course) {
        const courseIndex = this.getCourseIndex(course);
        if (courseIndex >= 0)
        this.courseOfferings[courseIndex].attendance++;
    }
}

class CourseOffering{
    constructor(course) {
        this.course = course;
        this.grade = 0;
        this.attendance = 0;
    }
}

class Course{
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    }
    getSubject() {
        return this.subject;
    }
    getAttendance() {
        return this.attendance;
    }
    decreaseQuota() {
        return this.quota--;
    }
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);
const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);