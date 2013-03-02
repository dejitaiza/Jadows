define(function(){
  var exports = {};
  exports.calcAngle = function(p1, p2) {
  if (p2.x > p1.x) {

    if (p2.y > p1.y) {

        return arctan(p1, p2)}

    else {
      if (p2.y==p1.y) {
        return 0}
        else {

        return 2*Math.PI+arctan(p1, p2)

      }
    }
  }
  else {    
    if (p2.x==p1.x) {
    
      if (p2.y == p1.y) {
        return 0}
        else {
          if (p2.y > p1.y) {
            return Math.PI/2}
            else {
              return 1.5*Math.PI
            }
          }
        }
    else {
    
    if (p2.y == p1.y) {
      return Math.PI}
      else {
        if (p2.y > p1.y) {
    
            return Math.PI + arctan(p1, p2)}
    
            else {
    
            return Math.PI+ arctan(p1, p2)
    
          }
        }
      }
    }
  }


  function arctan(p1, p2) {
    
    rat=  (p2.y-p1.y)/(p2.x-p1.x)
    inradians=Math.atan(rat)
    //indegrees=180*inradians/Math.PI
    return inradians
  }
  return exports;
});
