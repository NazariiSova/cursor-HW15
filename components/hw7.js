const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };



function getMyTaxes(salary) {
    return (this.tax * salary).toFixed(2)
}



export const salaryUA = getMyTaxes.call(ukraine, 1500)