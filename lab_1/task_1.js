function responseHandler(obj) {
  if (obj.status === "OK") {
    console.log("Запрос выполнен успешно");
  } else if (obj.status === "Failed") {
    if (obj.errorCode === 403) {
      connectionError403();
    } else if (obj.errorCode === 404) {
      connectionError404();
    }
  }
}
function connectionError403() {
  console.error("Ошибка 403: Доступ запрещен");
}
function connectionError404() {
  console.error("Ошибка 404: Страница не найдена");
}

// Пример вызова функции с различными объектами
const responseOk = { status: "OK", errorCode: null };
const response403 = { status: "Failed", errorCode: 403 };
const response404 = { status: "Failed", errorCode: 404 };

responseHandler(responseOk); // Выведет "Запрос выполнен успешно"
responseHandler(response403); // Вызовет функцию connectionError403
responseHandler(response404); // Вызовет функцию connectionError404