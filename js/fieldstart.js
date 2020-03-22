//start wheat
function stWh(id) { 
    'use strict';
    var b1 = "b" + id + "_wt",
        b2 = "b" + id + "_cow",
        b3 = "b" + id + "_ch",
        progid = "progbar" + id,
        field = "fld" + id;
    document.getElementById(b1).style.display = 'none';
    document.getElementById(b2).style.display = 'none';
    document.getElementById(b3).style.display = 'none';
    document.getElementById(field).className = 'wheat';
    wheatProgress(progid, b1, b2, b3);
}
//start cow
function stCow(id) { 
    'use strict';
    var b1 = "b" + id + "_wt",
        b2 = "b" + id + "_cow",
        b3 = "b" + id + "_ch",
        progid = "progbar" + id,
        field = "fld" + id;
    if (zerno>0) {
    document.getElementById(b1).style.display = 'none';
    document.getElementById(b2).style.display = 'none';
    document.getElementById(b3).style.display = 'none';
    document.getElementById(field).className = 'cow';
    zerno = zerno - 1;
    document.getElementById('q_wheat').innerHTML = zerno;
    cowProgress(progid, b1, b2, b3); }
    else {
    document.getElementById(field).className = 'td';
    document.getElementById(progid).style.display = 'none';}
    
}
//start cow
function stCh(id) { 
    'use strict';
    var b1 = "b" + id + "_wt",
        b2 = "b" + id + "_cow",
        b3 = "b" + id + "_ch",
        progid = "progbar" + id,
        field = "fld" + id;
    if (zerno>0) {
    document.getElementById(b1).style.display = 'none';
    document.getElementById(b2).style.display = 'none';
    document.getElementById(b3).style.display = 'none';
    document.getElementById(field).className = 'ch';
    zerno = zerno - 1;
    document.getElementById('q_wheat').innerHTML = zerno;
    chProgress(progid, b1, b2, b3); }
        else {
    document.getElementById(field).className = 'td';
    document.getElementById(progid).style.display = 'none';}
}
