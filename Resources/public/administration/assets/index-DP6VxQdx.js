const e=`{% block sw_data_grid_skeleton %} <tbody class="sw-data-grid-skeleton" aria-busy="true" > {% block sw_data_grid_skeleton_row %} <tr v-for="(item, itemIndex) in itemAmount" :key="\`grid-skeleton-itme-\${itemIndex}\`" class="sw-data-grid__row" > {% block sw_data_grid_skeleton_cell_selection %} <td v-if="showSelection" class="sw-data-grid__cell" > {% block sw_data_grid_skeleton_cell_selection_content %} <div class="sw-grid__cell-content"></div> {% endblock %} </td> {% endblock %} {% block sw_data_grid_skeleton_columns %} <td v-for="(column, columnIndex) in currentColumns" v-show="column.visible" :key="\`grid-skeleton-columns-\${itemIndex}-\${columnIndex}\`" class="sw-data-grid__cell" > {% block sw_data_grid_skeleton_columns_content %} <div class="sw-data-grid__cell-content" :style="{ 'width': getRandomLength() + '%', 'min-width': '100px' }" > {% block sw_data_grid_skeleton_element %} <sw-skeleton variant="listing" /> {% endblock %} </div> {% endblock %} </td> {% endblock %} {% block sw_data_grid_skeleton_spacer %} <td v-if="hasResizeColumns" class="sw-data-grid__cell" aria-hidden="true" > {% block sw_data_grid_skeleton_spacer_content %} <div class="sw-grid__cell-content"></div> {% endblock %} </td> {% endblock %} {% block sw_data_grid_skeleton_cell_actions %} <td v-if="showActions" class="sw-data-grid__cell" > {% block sw_data_grid_skeleton_cell_actions_content %} <div class="sw-grid__cell-content"></div> {% endblock %} </td> {% endblock %} </tr> {% endblock %} </tbody> {% endblock %}`,{Component:t}=Shopware;t.register("sw-data-grid-skeleton",{template:e,props:{currentColumns:{type:Array,required:!0,default(){return[]}},itemAmount:{type:Number,required:!1,default:7},showSelection:{type:Boolean,required:!1,default:!0},showActions:{type:Boolean,required:!1,default:!0},hasResizeColumns:{type:Boolean,required:!0,default:!1}},methods:{getRandomLength(){return Math.floor(Math.random()*51)+50}}});
