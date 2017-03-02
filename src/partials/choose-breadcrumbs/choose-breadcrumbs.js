document.addEventListener('DOMContentLoaded', function () {

    /**
     * Возврат на предыдущую страницу
     * @param {string} elem
     * @param {string} event
     */
    function goBack(elem, event) {

        var domNode = document.getElementsByClassName(elem);

        for (var i = 0; i < domNode.length; i++) {
            domNode[i].addEventListener(event, function () {
                window.history.back();
                console.info('Возврат на предыдущую страницу');
            });
        }

    }

    goBack('choose-breadcrumbs__back', 'click');

});