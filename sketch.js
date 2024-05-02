let P1=[];
let P2=[]; //dari solve()
let t=[];  //dari solve()
let a;
let b;
let c;
let d;
let P10;
let P20;

let dt = 0.1;
let tMax = 200;

let grafik;  //chart js

function setup() {
  createCanvas(400, 400);
  
  P10 = createInput("20");  //input default adalah 0,8
  P10.position(20,410)
  P20 = createInput("40");  //input default adalah 0,8
  P20.position(60,410)
  
  a = createSlider(0.1, 2, 0.4, 0.01);
  a.position(20,450);
  b = createSlider(0, 1, 0.01, 0.01);
  b.position(20,480);
  c = createSlider(0, 1, 0.1, 0.01);
  c.position(20,510);
  d = createSlider(0, 1, 0.5, 0.01);
  d.position(20,540);
  
  let p = createP('Kondisi Awal')  //teks biasa
  p.style('fontsize', '14px');
  p.position(20, 370);
  
  let q = createP('Parameter a')  //teks biasa
  q.style('fontsize', '14px');
  q.position(20, 420);
  solve();
  
  let r = createP('Parameter b')  //teks biasa
  r.style('fontsize', '14px');
  r.position(20, 450);
  solve();
  
  let s = createP('Parameter c')  //teks biasa
  s.style('fontsize', '14px');
  s.position(20, 480);
  solve();
  
  let u = createP('Parameter d')  //teks biasa
  u.style('fontsize', '14px');
  u.position(20, 510);
  solve();

  grafik= new Chart(this, config);
  
  //baris program untuk merespon input user
  P10.changed(solve);
  P20.changed(solve);
  a.changed(solve);
  b.changed(solve);
  c.changed(solve);
  d.changed(solve);
  
  solve();
  
}

function draw() {
  grafik.update();
   
}

function solve(){
  P1[0]= float(P10.value());
  P2[0]= float(P20.value());
  t[0]=0;
  as = float(a.value());
  bs = float(b.value());
  cs = float(c.value());
  ds = float(d.value());
  
  let iterNum = int(tMax/dt);
  for (let i=0; i< iterNum; i++){
    P1[i+1]=P1[i]+dt*as*P1[i]-dt*bs*P1[i]*P2[i];
    P2[i+1]=P2[i]+dt*cs*P1[i+1]*P2[i]-dt*ds*P2[i];
    t[i+1]= round((i+1)*dt,3);
    
  }
}