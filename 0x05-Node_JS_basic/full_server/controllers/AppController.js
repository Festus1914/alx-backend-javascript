/**
 * Contains the miscellaneous route handlers.
 * @author Oladipupo Oladotun Festus <https://github.com/Festus1914>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
