var TennisUI = pc.createScript('tennisUI');

TennisUI.attributes.add('ArrowUI', {type: 'entity'});
TennisUI.attributes.add('ArrowAngleText', {type: 'entity'});

TennisUI.prototype.initialize = function(){
    this.m_deviceAxisData = new pc.Vec3();
    window.addEventListener("deviceorientation", this.handleOrientation.bind(this), true);
};

TennisUI.prototype.handleOrientation = function(event)
{
    var absolute = event.absolute;
    var zAxis    = event.alpha; //(0-360)
    var xAxis     = event.beta; //(-180-180)
    var yAxis    = event.gamma; //(-90-90)

    this.m_deviceAxisData.set(xAxis , yAxis , zAxis );
};

TennisUI.prototype.update = function(dt)
{
   this.ArrowUI.setEulerAngles(0,0,-this.m_deviceAxisData.y);
   this.ArrowAngleText.element.text = Math.round(this.m_deviceAxisData.y).toString();
};