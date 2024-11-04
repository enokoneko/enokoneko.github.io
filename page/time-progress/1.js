// function toFullWidth(str) {
//   return str.replace(/[A-Za-z0-9]/g, function(a) {
//     return String.fromCharCode(a.charCodeAt(0) + 0xfee0);
//   });
// }

function weektoKakko(n, form) {
  const getDay_trans = [6, 0, 1, 2, 3, 4, 5];
  const zh = ["一", "二", "三", "四", "五", "六", "日"];
  const jp = ["月", "火", "水", "木", "金", "土", "日"];
  const jpkk = ["㈪", "㈫", "㈬", "㈭", "㈮", "㈯", "㈰"];

  n = getDay_trans[n];
  switch (form) {
  case 'zh':
    return zh[n];
  case 'jp':
    return jp[n];
  case 'jpkk':
    return jpkk[n];
  default:
    return n;
  }
}

function eto(year) {
  const e = ["庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己"];
  const to = ["申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未"];
  const syo = ["猿", "鶏", "犬", "猪", "鼠", "牛", "虎", "兎", "龍", "蛇", "馬", "羊"];
  return e[(year%10)] + to[(year%12)] + syo[(year%12)];
}

let now, day_str;

dayC();
function dayC() {
  now = new Date();
  let day = now.getDate();
  let week = now.getDay();
  let week_zh = weektoKakko(week, 'zh');
  let week_jpkk = weektoKakko(week, 'jpkk');
  let week_en = now.toLocaleString('en-US', {weekday: 'short'});
  let month_en = now.toLocaleString('en-US', {month: 'long'});
  let month = (now.getMonth() + 1).toString();
  let year = now.getFullYear();
  let year_jp = now.toLocaleString('ja-JP-u-ca-japanese', {year: "numeric"}).match(/\d+/)[0];
  let year_tw = year - 1911;
  let year_eto = eto(year);

  day_str = new Date(year, month - 1, day);
  
  let year_str = new Date(year, 0, 1);
  // let year_next_str = new Date(year + 1, 0, 1);
  // let oneyear = year_next_str - year_str;
  let doy_pass_s = now - year_str;
  let doy_pass = Math.ceil(doy_pass_s / 86400000);
  let week_pass = Math.ceil(doy_pass_s / 86400000 / 7);
  let doy_per = Math.floor(doy_pass_s / (new Date(year + 1, 0, 1) - year_str) * 100);
  
  $('#progress-dom').text(day);
  $('#progress-dow').text(month + 'm·' + week_pass + 'w·' + doy_pass + 'd·' + week_en + week_jpkk);
  // $('#progress-en').text(week_en + ', ' + month_en);
  $('#progress-years').text(year_eto + '・㋿ ' + year_jp + '・民國' + year_tw + '・西暦' + year + '・' + month_en);

  $(':root').css({
    '--n-bar-per': `${doy_per}%`,
  });
}

// let day_str = new Date(year, month - 1, day);
let day_pass = now - day_str;
let day_remain = 86400000 - day_pass;
// let day_pass_per = Math.floor(day_pass / 864000);
// let dom_end = new Date(year, month, 0).getDate();
// let dom_per = Math.floor(day / dom_end * 100);

passC();
function passC() {
  now = new Date();
  day_pass = now - day_str;

  let day_pass_per = Math.floor(day_pass / 864000);
  $(':root').css({
    '--n-numb-per': `${day_pass_per}%`,
  });
}

setTimeout(() => {
  dayC();
  setInterval(dayC, 86400000);
}, day_remain);

setInterval(passC, 864000);