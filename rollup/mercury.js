'use strict';function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});var fieldTypeEnum = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var FieldType;

(function (FieldType) {
  FieldType["Address"] = "address";
  FieldType["Boolean"] = "boolean";
  FieldType["Date"] = "date";
  FieldType["DateTime"] = "dateTime";
  FieldType["Directory"] = "directory";
  FieldType["Duration"] = "duration";
  FieldType["File"] = "file";
  FieldType["Id"] = "id";
  FieldType["Number"] = "number";
  FieldType["Phone"] = "phone";
  FieldType["Raw"] = "raw";
  FieldType["Schema"] = "schema";
  FieldType["Select"] = "select";
  FieldType["Text"] = "text";
})(FieldType || (FieldType = {}));

var _default = FieldType;
exports["default"] = _default;

});var permissionContract_schema = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fieldTypeEnum = interopRequireDefault(fieldTypeEnum);

var permissionContractSchema = {
  id: 'permissionContract',
  name: 'Permission Contract',
  fields: {
    /** Clocked in. Is the person clocked in and ready to rock? */
    'clockedIn': {
      label: 'Clocked in',
      type: _fieldTypeEnum["default"].Boolean,
      hint: 'Is the person clocked in and ready to rock?',
      options: undefined
    },

    /** Clocked out. When someone is not working (off the clock). */
    'clockedOut': {
      label: 'Clocked out',
      type: _fieldTypeEnum["default"].Boolean,
      hint: 'When someone is not working (off the clock).',
      options: undefined
    },

    /** On premise. Are they at work (maybe working, maybe visiting). */
    'onPrem': {
      label: 'On premise',
      type: _fieldTypeEnum["default"].Boolean,
      hint: 'Are they at work (maybe working, maybe visiting).',
      options: undefined
    },

    /** Off premise. They aren't at the office or shop. */
    'offPrem': {
      label: 'Off premise',
      type: _fieldTypeEnum["default"].Boolean,
      hint: 'They aren\'t at the office or shop.',
      options: undefined
    }
  }
};
var _default = permissionContractSchema;
exports["default"] = _default;

});var eventSignature_schema = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fieldTypeEnum = interopRequireDefault(fieldTypeEnum);

var _permissionContract = interopRequireDefault(permissionContract_schema);

var eventSignatureSchema = {
  id: 'eventSignature',
  name: 'Event Signature',
  fields: {
    /** . */
    'responsePayload': {
      type: _fieldTypeEnum["default"].Raw,
      options: {
        valueType: "SpruceSchema.ISchema"
      }
    },

    /** . */
    'emitPayload': {
      type: _fieldTypeEnum["default"].Raw,
      options: {
        valueType: "SpruceSchema.ISchema"
      }
    },

    /** . */
    'listenPermissionsAny': {
      type: _fieldTypeEnum["default"].Schema,
      options: {
        schema: _permissionContract["default"]
      }
    },

    /** . */
    'emitPermissionsAny': {
      type: _fieldTypeEnum["default"].Schema,
      options: {
        schema: _permissionContract["default"]
      }
    }
  }
};
var _default = eventSignatureSchema;
exports["default"] = _default;

});var mercuryContract_schema = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fieldTypeEnum = interopRequireDefault(fieldTypeEnum);

var _eventSignature = interopRequireDefault(eventSignature_schema);

var mercuryContractSchema = {
  id: 'mercuryContract',
  name: 'Mercury Contract',
  dynamicFieldSignature: {
    type: _fieldTypeEnum["default"].Schema,
    keyName: 'eventNameWithOptionalNamespace',
    options: {
      schema: _eventSignature["default"]
    }
  }
};
var _default = mercuryContractSchema;
exports["default"] = _default;

});var build = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mercuryContractSchema", {
  enumerable: true,
  get: function get() {
    return _mercuryContract["default"];
  }
});

var _mercuryContract = interopRequireDefault(mercuryContract_schema);

});

var index = /*@__PURE__*/getDefaultExportFromCjs(build);module.exports=index;