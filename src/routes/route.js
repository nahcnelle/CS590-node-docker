import {home, getTodayDate, getMonthsName, getPeople} from '../controllers/controller.js';

const routes = (app) => {
    app.route('/')    // home page
        .get(home)
    app.route('/home')    // get home page
        .get(home)
    app.route('/today')    // todays date
        .get(getTodayDate)
    app.route('/months')    // list of months
        .get(getMonthsName)
    app.route('/people')    // list of people
        .get(getPeople)
}

export default routes;