function addfld(vl,tr) {
  var td = document.createElement('td'),
      txt = '<progress id = "progbar'+vl+'" value="0" max="100"></progress><p class="ruby"><button id="b'+vl+'_wt" class="start_wheat" OnClick="stWh(\''+vl+'\');"></button><button id="b'+vl+'_cow" class="start_cow" OnClick="stCow(\''+vl+'\');"></button><button id="b'+vl+'_ch" class="start_ch" OnClick="stCh(\''+vl+'\');"></button></p>';
td.innerHTML = txt;
td.id = 'fld'+vl;
tr.appendChild(td);
}

function addrow(xx,trnum) {
var tbl = document.getElementById('game'),
    tr = document.createElement('tr');
for (var tDnum=1; tDnum<=xx; tDnum++) {
var vL=trnum.toString()+'-'+tDnum;
addfld(vL,tr);}
tbl.appendChild(tr);
}

function gentable(x,y) {
for (var tRnum=1; tRnum<=y; tRnum++) { addrow(x,tRnum);}}
