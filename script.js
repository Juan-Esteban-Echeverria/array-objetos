// TITULO 
document.write(`<h1>Estadisticas Centro Medico Ñuñoa</h1>`)


// LISTADO DE PACIENTES
var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


// ---------------------------------------------------------------------------------------------------------------------------------------------------


// AGREGADO DE LISTA A TRAUMATOLOGIA
traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'})

    

// ELIMINAR EL PRIMER Y ULTIMO ARREGLO DE RADIOLOGIA
    radiologia.pop()
    radiologia.shift()


// IMPRESION LISTA DE CONSULTAS DE DENTAL
document.write(`<h2>Lista de Consultas Medicas de Dental</h2>`)

    var dent = `<p></p>`
        for(var i =0; i<dental.length; i++){
            dent+=`
                <p>${dental[i].hora}  - 
                ${dental[i].especialista}  - 
                ${dental[i].paciente}  - 
                ${dental[i].rut}  - 
                ${dental[i].prevision}</p>`}
                        document.write(dent);

document.write(`<b>--------------------------------------------------------------------------------------------------</b>`)

// LISTADO TOTAL DE TODOS LOS PACIENTES
document.write(`<h2>Listado Total de Todos los Pacientes</h2>`)

    var radioPacientes = `<p></p>`
        for(var i =0; i<radiologia.length; i++){
            radioPacientes+=`
                <p>${radiologia[i].paciente}</p>`}
                    document.write(radioPacientes);

    var trauPacientes = `<p></p>`
        for(var i =0; i<traumatologia.length; i++){
            trauPacientes+=`
                <p>${traumatologia[i].paciente}</p>`}
                    document.write(trauPacientes);

    var dentalPacientes = `<p></p>`
        for(var i =0; i<dental.length; i++){
            dentalPacientes+=`
                <p>${dental[i].paciente}</p>`}
                    document.write(dentalPacientes);

document.write(`<b>--------------------------------------------------------------------------------------------------</b>`)

// FILTRAR PACIENTES ISAPRE DE DENTAL
document.write(`<h2>Filtrado de Pacientes con Isapre en Dental</h2>`)

    var pacientesIsapre = dental.filter(function(isapre){
        return isapre.prevision == "ISAPRE"})

    var listaPacientesIsapre = `<p></p>`
        for(var i =0; i<pacientesIsapre.length; i++){
            listaPacientesIsapre+=`
                <p>${pacientesIsapre[i].paciente} - ${pacientesIsapre[i].prevision}</p>`}
                    document.write(listaPacientesIsapre)

document.write(`<b>--------------------------------------------------------------------------------------------------</b>`)

// FILTRAR PACIENTES FONASA DE TRAUMATOLOGIA
document.write(`<h2>Filtrado de Pacientes con Fonasa en Traumatologia</h2>`)

    var pacientesFonasa = traumatologia.filter(function(fonasa){
        return fonasa.prevision == "FONASA"})

    var listaPacientesFonasa = `<p></p>`
        for(var i=0; i<pacientesFonasa.length; i++){
            listaPacientesFonasa+=`
                <p>${pacientesFonasa[i].paciente} - ${pacientesFonasa[i].prevision}</p>`}
                    document.write(listaPacientesFonasa)

document.write(`<b>--------------------------------------------------------------------------------------------------</b>`)

