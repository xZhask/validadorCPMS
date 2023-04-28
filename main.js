async function postData(data) {
    const response = await fetch(`verificar.php`, {
        method: "POST",
        body: data,
    }).then((res) => res.json());
    return await response;
}

/* $(document).on("submit", "#frmExcelImport", async (e) => {
    e.preventDefault();
    let form = document.querySelector("#frmExcelImport");
    let datos = new FormData(form);
    //datos.append("accion", "LOGIN");
    let respuesta = await postData(datos);
    if (respuesta === "OK") window.location.assign("index.php");
    else
        Swal.fire({
            icon: 'error',
            title: 'Error de Acceso',
            text: 'Datos Incorrectos',
            confirmButtonColor: '#3085d6',
        })
console.log(respuesta)
});
 */
const form = document.querySelector('#frmExcelImport');
const contTable = document.querySelector('#cont-result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let frm = document.querySelector("#frmExcelImport");
    let datos = new FormData(frm);
    let respuesta = await postData(datos);
    console.log(respuesta)
    contTable.innerHTML = respuesta.data;
})