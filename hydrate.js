let waterGoal = 2.5, waterCurrent = parseFloat(localStorage.getItem('waterTracker')||0);
function refreshTracker() {
  let progress = Math.min(waterCurrent/waterGoal,1)*100;
  document.getElementById('trackerProgress').innerHTML = `<b>${waterCurrent.toFixed(2)}L</b> / ${waterGoal}L (${Math.round(progress)}%)`;
  document.getElementById('trackerBar').style.width = progress+"%";
}
window.addWater = function(a) {
  waterCurrent = Math.round((waterCurrent+a)*100)/100;
  localStorage.setItem('waterTracker',waterCurrent); refreshTracker();
};
window.resetWater = function() {waterCurrent=0; localStorage.setItem('waterTracker',waterCurrent); refreshTracker();}
window.onload=refreshTracker;
