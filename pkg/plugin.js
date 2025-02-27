
;(function ( $, window, document, undefined ) {

    var pluginName = 'kontrol',
        _search = '.waxed-kontrol',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;


    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = 'kontrol';
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        var changed = false;
        if (typeof rec.config == 'object') {
          var data = rec.config;
          if (typeof data.color == 'string') {
            this.cfg.fgColor = data.color;
            $(this.element).data('fgcolor', data.color);
            console.log(this.element, data.color);
            changed = true;
          }          
        };
        if (changed) {
          //console.log(this.cfg);
          //var a = $(this.element).xy(this.cfg);
          if (this.mode == 'knob') {
            $(that.element).knob(this.cfg);
          }
          if (this.mode == 'xy') {
            $(that.element).xy(this.cfg);
          }
          if (this.mode == 'bars') {
            $(that.element).bars(this.cfg);
          }
          $(that.element).trigger('change');
          $(that.element).find('input').each(function(i,a){
            $(a).trigger('change');
          });
        }
        
        if (typeof rec.value == 'number') {
          if (this.mode == 'knob') {
            $(that.element).val(rec.value).trigger('change');
          }
        }
        if (typeof rec.value == 'object') {
          if ((this.mode == 'xy')||(this.mode == 'bars')) {
            var values = rec.value;
            $(that.element).find('input').each(function(i,a){
              if (typeof values[i] == 'number') {
                $(a).val(values[i]);
                $(a).trigger('change');
              }
            });
            //$(that.element).trigger('change');
          }

        }

        
      },


      this.free = function() {

      },

      this._set = function(v) {
        that.form = $(that.element).closest('form');
        //console.log(v, 'SUBMIT!');
        $(that.form).trigger('waxed-form-submit');
        //console.log(v);
      },

      this.init=function() {
        var cfg = {
          release: function (v) {
            that._set(v);
          }
        };
        
        //console.log(typeof(that.dd.max));
        if (typeof(that.dd.min)!='undefined') {
          cfg.min = that.dd.min;
        };
        if (typeof(that.dd.max)!='undefined') {
          cfg.max = that.dd.max;
        };
        
        //cfg.fgColor='lime';
        this.cfg = cfg;

        if ($(this.element).hasClass('kontrol-knob')) {
          this.mode = 'knob';
          $(this.element).knob(this.cfg);

        } else if ($(this.element).hasClass('kontrol-dial')) {
          this.mode = 'dial';
          $(this.element).dial(this.cfg);

        } else if ($(this.element).hasClass('kontrol-xy')) {
          this.mode = 'xy';
          var xy = $(this.element).xy(this.cfg);
          console.log('XY',xy[0]);
          $(xy[0]).addClass('kontrol-xy-pad');

        } else if ($(this.element).hasClass('kontrol-bars')) {
          this.mode = 'bars';
          $(this.element).bars(this.cfg);

        } else {

        }
        inited = true;
      },
      this._init_();
    }

    /*
    if (typeof(document.jammin) == 'undefined') {
      document.jammin = {};
    };
    document.jammin[pluginName] = {
      search:'.jam-kontrol',
      getInstance:function(plug, elem, data) {
        //var data = $(elem).data();
        if(!data['plugin_'+pluginName]){
          $(elem).trigger('jam-plugin-instance-create', pluginName);
          plug.plugExtend(Instance, _api);
          var o = new Instance(plug,elem,data)._api_();
          $.data(elem,'plugin_'+pluginName, o);
          return o;
        }else{
          return data['plugin_'+pluginName];
        }
      }
    };
    */
    $.waxxx(pluginName, _search, Instance, _api);

})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
