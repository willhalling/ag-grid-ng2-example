/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../app/numeric-editor.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('@angular/core/src/linker/query_list');
var import11 = require('../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory');
var import12 = require('../node_modules/@angular/forms/src/directives/ng_model.ngfactory');
var import13 = require('../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory');
var import14 = require('@angular/core/src/linker/element_ref');
var import15 = require('@angular/forms/src/directives/default_value_accessor');
var import16 = require('@angular/forms/src/directives/control_value_accessor');
var import17 = require('@angular/forms/src/directives/ng_model');
var import18 = require('@angular/forms/src/directives/ng_control');
var import19 = require('@angular/forms/src/directives/ng_control_status');
var Wrapper_NumericEditorComponent = (function () {
    function Wrapper_NumericEditorComponent() {
        this.changed = false;
        this.context = new import0.NumericEditorComponent();
    }
    Wrapper_NumericEditorComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_NumericEditorComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_NumericEditorComponent;
}());
exports.Wrapper_NumericEditorComponent = Wrapper_NumericEditorComponent;
var renderType_NumericEditorComponent_Host = null;
var _View_NumericEditorComponent_Host0 = (function (_super) {
    __extends(_View_NumericEditorComponent_Host0, _super);
    function _View_NumericEditorComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NumericEditorComponent_Host0, renderType_NumericEditorComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NumericEditorComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'numeric-cell', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NumericEditorComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NumericEditorComponent_0_4 = new Wrapper_NumericEditorComponent();
        this._appEl_0.initComponent(this._NumericEditorComponent_0_4.context, [], compView_0);
        compView_0.create(this._NumericEditorComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NumericEditorComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NumericEditorComponent) && (0 === requestNodeIndex))) {
            return this._NumericEditorComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_NumericEditorComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NumericEditorComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NumericEditorComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._NumericEditorComponent_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_NumericEditorComponent_Host0;
}(import1.AppView));
function viewFactory_NumericEditorComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NumericEditorComponent_Host === null)) {
        (renderType_NumericEditorComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_NumericEditorComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.NumericEditorComponentNgFactory = new import9.ComponentFactory('numeric-cell', viewFactory_NumericEditorComponent_Host0, import0.NumericEditorComponent);
var styles_NumericEditorComponent = [];
var renderType_NumericEditorComponent = null;
var _View_NumericEditorComponent0 = (function (_super) {
    __extends(_View_NumericEditorComponent0, _super);
    function _View_NumericEditorComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NumericEditorComponent0, renderType_NumericEditorComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NumericEditorComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_input_0 = new import10.QueryList();
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'input', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        this._DefaultValueAccessor_0_5 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_0));
        this._NG_VALUE_ACCESSOR_0_6 = [this._DefaultValueAccessor_0_5.context];
        this._NgModel_0_7 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_0_6);
        this._NgControl_0_8 = this._NgModel_0_7.context;
        this._NgControlStatus_0_9 = new import13.Wrapper_NgControlStatus(this._NgControl_0_8);
        var disposable_0 = this.renderer.listen(this._el_0, 'keydown', this.eventHandler(this._handle_keydown_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_0_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_0, 'input', this.eventHandler(this._handle_input_0_2.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_0, 'blur', this.eventHandler(this._handle_blur_0_3.bind(this)));
        var subscription_0 = this._NgModel_0_7.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_0_1.bind(this)));
        this._viewQuery_input_0.reset([this._appEl_0.vcRef]);
        this.context.input = this._viewQuery_input_0.first;
        this.init([], [this._el_0], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [subscription_0]);
        return null;
    };
    _View_NumericEditorComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.DefaultValueAccessor) && (0 === requestNodeIndex))) {
            return this._DefaultValueAccessor_0_5.context;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_0_6;
        }
        if (((token === import17.NgModel) && (0 === requestNodeIndex))) {
            return this._NgModel_0_7.context;
        }
        if (((token === import18.NgControl) && (0 === requestNodeIndex))) {
            return this._NgControl_0_8;
        }
        if (((token === import19.NgControlStatus) && (0 === requestNodeIndex))) {
            return this._NgControlStatus_0_9.context;
        }
        return notFoundResult;
    };
    _View_NumericEditorComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_0_5.detectChangesInInputProps(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.value;
        this._NgModel_0_7.check_model(currVal_0_1_0, throwOnChange, false);
        this._NgModel_0_7.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this._NgControlStatus_0_9.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._DefaultValueAccessor_0_5.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this._NgModel_0_7.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this._NgControlStatus_0_9.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_NumericEditorComponent0.prototype.destroyInternal = function () {
        this._NgModel_0_7.context.ngOnDestroy();
    };
    _View_NumericEditorComponent0.prototype._handle_keydown_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.context.onKeyDown($event) !== false);
        return (true && pd_0_0);
    };
    _View_NumericEditorComponent0.prototype._handle_ngModelChange_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = ((this.context.value = $event) !== false);
        return (true && pd_0_0);
    };
    _View_NumericEditorComponent0.prototype._handle_input_0_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._DefaultValueAccessor_0_5.context.onChange($event.target.value) !== false);
        return (true && pd_0_0);
    };
    _View_NumericEditorComponent0.prototype._handle_blur_0_3 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._DefaultValueAccessor_0_5.context.onTouched() !== false);
        return (true && pd_0_0);
    };
    return _View_NumericEditorComponent0;
}(import1.AppView));
function viewFactory_NumericEditorComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NumericEditorComponent === null)) {
        (renderType_NumericEditorComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_NumericEditorComponent, {}));
    }
    return new _View_NumericEditorComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_NumericEditorComponent0 = viewFactory_NumericEditorComponent0;
//# sourceMappingURL=numeric-editor.component.ngfactory.js.map