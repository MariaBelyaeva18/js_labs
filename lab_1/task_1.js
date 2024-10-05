// обработка сообщения от сервера
function responseHandler(obj) {
  if (obj.status === 'OK') {
    console.log('Запрос выполнен успешно');
  } else if (obj.status === 'Failed') {
    if (obj.errorCode === 403) {
      connectionError403();
    } else if (obj.errorCode === 404) {
      connectionError404();
    }
  }
}
// пришла ошибка доступа
function connectionError403() {
  console.error('Ошибка 403: Доступ запрещен');
}
// сервер ничего не нашёл по указанному адресу
function connectionError404() {
  console.error('Ошибка 404: Страница не найдена');
}

// примеры возвращаемых с сервера ответов
const responseOk = { status: 'OK', errorCode: null };
const response403 = { status: 'Failed', errorCode: 403 };
const response404 = { status: 'Failed', errorCode: 404 };

// вызов обработки разных ответов серверы
responseHandler(responseOk);
responseHandler(response403);
responseHandler(response404);