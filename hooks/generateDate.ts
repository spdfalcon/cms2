function miladi_be_shamsi(gy:any, gm:any, gd:any) {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = (gm > 2) ? (gy + 1) : gy;
  days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
  jy = -1595 + (33 * ~~(days / 12053));
  days %= 12053;
  jy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
      jy += ~~((days - 1) / 365);
      days = (days - 1) % 365;
  }
  if (days < 186) {
      jm = 1 + ~~(days / 31);
      jd = 1 + (days % 31);
  } else {
      jm = 7 + ~~((days - 186) / 30);
      jd = 1 + ((days - 186) % 30);
  }
  return [jy + '/' + jm + '/' + jd];
}
console.log(miladi_be_shamsi(1990, 7, 22));
// Output: ['1369/4/31']
const tarikh = new Date()
  const shamsi:any = miladi_be_shamsi(tarikh.getFullYear() ,tarikh.getMonth()+1 ,tarikh.getDate())[0].split('/')
  const generatedatecustom = (mines: any) => {
    if ((Number(shamsi[2]) - mines) <= 0) {
      if (
        Number(shamsi[1] == 1) ||
        Number(shamsi[1] == 2) ||
        Number(shamsi[1] == 3) ||
        Number(shamsi[1] == 4) ||
        Number(shamsi[1] == 5) ||
        Number(shamsi[1] == 6)
      ) {
        return 31 - mines + Number(shamsi[2]);
      } else if (
        Number(shamsi[1] == 7) ||
        Number(shamsi[1] == 8) ||
        Number(shamsi[1] == 9) ||
        Number(shamsi[1] == 10) ||
        Number(shamsi[1] == 11)
        ) {
        return 30 - mines + Number(shamsi[2]);
      }else if(Number(shamsi[1] == 12)){
        return 29 - mines + Number(shamsi[2]);
      }
    }else{
      return (Number(shamsi[2]) - mines)
    }
  };
  export default generatedatecustom