import path from 'path';
const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/src/pages/home.html");
}

export const getTodayDate = (req, res) => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = day + "/" + month + "/" + year;
    res.json({
        today: newdate
    });
}

export const getMonthsName = (req, res) => {
    res.json({
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    });
}

export const getPeople = (req, res) => {
    res.json([
        {
            FirstName: 'Ellen',
            LastName: 'Chan',
            title: 'Software Engineer',
        },
        {
            FirstName: 'Adam',
            LastName: 'Apple',
            title: 'Software Developer',
        },
        {
            FirstName: 'Benson',
            LastName: 'Bean',
            title: 'Web Developer',
        },
        {
            FirstName: 'Claire',
            LastName: 'Coats',
            title: 'Web Developer',
        }
    ]);
}
