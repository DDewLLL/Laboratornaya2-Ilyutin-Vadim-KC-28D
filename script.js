let money=prompt("Ваш бюджет на месяц?", ''),
    time=prompt("Введите дату в формате YYYY-MM-DD", '');

    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    };
 


    for (let i = 0; i < 2; i++) {
            let a=prompt("Введите обязательную статью расходов в этом месяце", ''),
                b=prompt("Во сколько обойдется?", '');
                {
                    appData.expenses[a]=b;
                }
                
        if ((typeof(a))=== 'string'&& (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done")
        }
        appData.moneyPerDay= (appData.budget-a)/30;

        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    }
        if(appData.moneyPerDay < 100){
            alert("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 &&appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            alert("Высокий уровень достатка");
        } else {
            alert("Произошла ошибка")
        }