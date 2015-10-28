/*
 * @category Design Pattern Tutorial
 * @package AbstractFactory Sample
 * @author Dmitry Sheiko <me@dsheiko.com>
 * @link http://dsheiko.com
 */

(function() {

/**
 * Concrete factories
 */
var MockWidgetFactory = function(widget) {
    var CLASS_PREF = 'MockWidget_';
    return new this[CLASS_PREF + widget]();
};

var WidgetFactory = function(widget) {
    var CLASS_PREF = 'Widget_';
    return new this[CLASS_PREF + widget]();
};

/**
 * Abstract factory
 */
var Factory = (function() {
    var _widgetFactory = WidgetFactory;
    return {
        setFactory: function(factory) {
            _widgetFactory = factory;
        },
        widget: function(widget) {
            var instance = _widgetFactory(widget);
            instance.init();
            return instance;
        }
    }
}());

Widget_Slideshow = function() {
    return {
        init: function() {
            // console.log('Widget slideshow initialized');
        }
    }
};
MockWidget_Slideshow = function() {
    return {
        init: function() {
            // console.log('Mock widget slideshow initialized');
        }
    }
};

/**
 * Usage
 */
var widget = Factory.widget('Slideshow');
Factory.setFactory(MockWidgetFactory);
var widget = Factory.widget('Slideshow');
t_start=new Date();
for (var i=0;i<50000;i++)
{
    var widget = Factory.widget('Slideshow');

Factory.setFactory(MockWidgetFactory);

}

t_end=new Date();
print(t_end-t_start);

// Output
// Widget slideshow initialized
// Mock widget slideshow initialized

}());

