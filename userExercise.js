var User = function(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.compare = function(user) {
  if (this.age > user.age) {
    alert(this.name + " is older then " + user.name);
  }
  else if (this.age == user.age) {
    alert(this.name + " and " + user.name + " have equal age");
  }
  else {
    alert(user.name + " is older then " + this.name);
  }
}

window.onload = function() {
  var Neeraj = new User( "Neeraj", 23);
  var Nitesh = new User( "Nitesh", 21);
  Neeraj.compare(Nitesh);
}