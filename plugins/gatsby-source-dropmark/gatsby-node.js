"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const crypto = require(`crypto`);
const axios = require(`axios`);

exports.sourceNodes = (() => {
  var _ref = _asyncToGenerator(function* ({ boundActionCreators: { createNode } }, { collections }) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = collections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        let collection_id = _step.value;

        var _ref2 = yield axios.get(`http://chs.dropmark.com/${collection_id}.json`);

        const data = _ref2.data;


        const items = data.items;

        items.map(function (item) {
          const itemNode = {
            title: item.name,
            description: item.description,
            preview_url: item.preview,
            sort: item.sort,
            link: item.link,
            date: item.created_at,
            id: item.id.toString(),
            parent: null,
            children: [],
            internal: {
              type: `Dropmark`,
              contentDigest: crypto.createHash(`md5`).update(JSON.stringify(item.id)).digest(`hex`)
            }
          };

          item.link && createNode(itemNode);
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();