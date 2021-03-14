document.addEventListener('DOMContentLoaded', () => {

  const invoicesTable = document.querySelector('.invoices__table tbody');
  const createInvoicePopup = document.querySelector('.create-invoice');
  const btnPostData = document.querySelector('.form__btn');
  const actionsBtn = document.querySelector('.actions__btn');
  const createInvoiceClose = document.querySelector('.create-invoice__close');

  const inputNumber = document.getElementById('invoices-number');
  const inputInvoiceDate = document.getElementById('invoices-date');
  const inputSupplyDate = document.getElementById('supply-date');
  const inputInvoiceComment = document.getElementById('invoices-comment');

  const createTableRow = (date_created, number, date_supplied, comment) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${date_created}</td>
                          <td class="table-row__number">INV-${number}</td>
                          <td>${date_supplied}</td>
                          <td>${comment}</td>`
    return tableRow;
  };

  const closePopup = (event) => {
    const target = event.target;
    
    if (target === createInvoiceClose || event.keyCode === 27){
      createInvoicePopup.style.display = '';
      document.body.classList.remove('body--dark');
      document.removeEventListener('keyup', closePopup);
    }
  };

  const openPopup = () => {
    createInvoicePopup.style.display = 'block';
    document.body.classList.add('body--dark');
    document.addEventListener('keyup', closePopup);
  };

  const renderTableRow = (data) => {
    data.forEach(({_id, number, date_created, date_supplied, comment}) => {
      invoicesTable.append(createTableRow(date_created, number, date_supplied, comment));
    })
  };

  const validateForm = () => {
    if (inputNumber.value.length < 3) {
      inputNumber.style.border = '2px solid red';
      return false;
    } else {
      inputNumber.style.border = '';
    }

    if(inputInvoiceDate.value == '') {
      inputInvoiceDate.style.border = '2px solid red';
      return false;
    } else {
      inputInvoiceDate.style.border = '';
    }

    if(inputSupplyDate.value == '') {
      inputSupplyDate.style.border = '2px solid red';
      return false;
    } else {
      inputSupplyDate.style.border = '';
    }

    if(inputInvoiceComment.value.length > 160 || inputInvoiceComment.value == '') {
      inputInvoiceComment.style.border = '2px solid red';
      return false;
    } else {
      inputSupplyDate.style.border = '';
    }

    return true;
  }

  const reformatDate = (dateStr) => {
    dArr = dateStr.split("-");
    return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
  }

  const getFormData = () => {
    let data = {
      id: `5ba37c48${(+new Date).toString(16)}`,
      number: inputNumber.value,
      date_created: reformatDate(inputInvoiceDate.value),
      date_supplied: reformatDate(inputSupplyDate.value),
      comment: inputInvoiceComment.value
    }
    return data;
  }

  const getData = (handler) => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then(handler);
  };

  const postData = () => {
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getFormData())
    });

    return true;
  }
  
  actionsBtn.addEventListener('click', openPopup);
  createInvoiceClose.addEventListener('click', closePopup);

  btnPostData.addEventListener('click', function () { 

    if(validateForm()) {
      postData();
      createInvoicePopup.style.display = '';
      document.body.classList.remove('body--dark');
    } else {
      return false;
    }
  });

  getData(renderTableRow);








});