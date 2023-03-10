const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];





function makePairs(studentsArr = []) {

    let boys = [];
    let girls = [];

    for (let i = 0; i < studentsArr.length; i++) {
        let gender = studentsArr[i];
        if (gender[gender.length - 1] == "а") {
            girls.push(studentsArr[i]);
        } else {
            boys.push(studentsArr[i]);
        }

    }

    let allPairs = [];

    for (let i = 0; i < girls.length; i++) {
        allPairs.push([boys[i], girls[i]])
    }


    return allPairs;
}
export const newAllPairs = makePairs(students)
