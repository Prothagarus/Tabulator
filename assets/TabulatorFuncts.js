window.myNamespace = Object.assign({}, window.myNamespace, {
    tabulator: {
        printIcon: function (cell, formatterParams, onRendered) {
            return "<i class='fa fa-print'></i>";
        },
    colorRowFormatter: {function(row){
            console.log(row.getData());
            if (row.getData().name === 'green'){
                const children = row.getElement().childNodes;
                children.forEach((child) => {
                    child.style.backgroundColor = 'green';
                })}}
            }
    }
});
