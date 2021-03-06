const { dateFromObjectId } = require('../common/helper')
const transform = async (attribute, options) => {
  return {
    "is_wysiwyg_enabled": false,
    "is_html_allowed_on_front": true,
    "used_for_sort_by": false,
    "is_filterable": true,
    "is_filterable_in_search": false,
    "is_used_in_grid": true,
    "is_visible_in_grid": false,
    "is_filterable_in_grid": true,
    "position": 0,
    "apply_to": [
        "simple",
        "virtual",
        "configurable"
    ],
    "is_searchable": "0",
    "is_visible_in_advanced_search": "0",
    "is_comparable": "0",
    "is_used_for_promo_rules": "1",
    "is_visible_on_front": "0",
    "used_in_product_listing": "1",
    "is_visible": true,
    "scope": "global",
    "attribute_id": attribute.id,
    "attribute_code": attribute.name.toLowerCase(),
    "frontend_input": "select",
    "entity_type_id": "4",
    "is_required": false,
    "options": options ?  options : [],
    "is_user_defined": true,
    "default_frontend_label": attribute.name.toLowerCase(),
    "frontend_labels": null,
    "backend_type": "int",
    "source_model": "Magento\\Eav\\Model\\Entity\\Attribute\\Source\\Table",
    "default_value": "Stone/white",
    "is_unique": "0",
    "validation_rules": [],
    "id": dateFromObjectId(attribute.id),
  }
  
} 

module.exports = transform