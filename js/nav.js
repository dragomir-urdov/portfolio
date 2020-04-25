$.get("./shared/navigation.html", function(data) {
    $("#navigation-placeholder").replaceWith(data);
});
