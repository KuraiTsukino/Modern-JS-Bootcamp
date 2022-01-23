const account = {
    name: "Kurai Tsukino",
    expenses: [],
    incomes: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncomes = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount   
        });

        this.incomes.forEach(function (income) {
            totalIncomes = totalIncomes + income.amount
        })
        return `${this.name} has a balance of $${totalIncomes - totalExpenses}. $${totalIncomes} in incomes and $${totalExpenses} in expenses.`
    }
}

account.addIncome("Work", 2000)
account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
console.log(account.getAccountSummary())

// 1. Add an income array to account
// 2. addIncome method => description, amount
// 3. Tweak getAccountSummary