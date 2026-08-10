const customers = [
    {
        name: "John Smith",
        email: "john@example.com"
    }
];

const customerList = document.querySelector(".customer-list");

const customerRow = document.createElement("a");
customerRow.classList.add("customer-row");
customerRow.href = "#";

const customerName = document.createElement("span");
customerName.classList.add("customer-name");
customerName.textContent = customers[0].name;

const customerEmail = document.createElement("span");
customerEmail.classList.add("customer-email");
customerEmail.textContent = customers[0].email;

customerRow.append(customerName, customerEmail);

customerList.append(customerRow);