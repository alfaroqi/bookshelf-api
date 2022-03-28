const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
} = require('./book_handler');

const routes = [
  {
    method: 'GET', // GET all data
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET', // GET a single data
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'POST', // POST a new data book
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'PUT', // Update data book
    path: '/books/{id}',
    handler: updateBookByIdHandler,
  },
  {
    method: 'DELETE', // Delete data book
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
