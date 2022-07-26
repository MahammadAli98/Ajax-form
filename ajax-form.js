$(document).ready(function () {
    $.validate()
    // Object as Array
    $.fn.serializeObject = function () {
        var o = {}
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]]
                }
                o[this.name].push(this.value || '')
            } else {
                o[this.name] = this.value || ''
            }
        })
        return o
    };
    $("#contactForm").submit(function (event) {
        event.preventDefault()
        var formData = {}
        formData = $('#contactForm').serializeObject()

        $.ajax({
            url: 'http://example.com/endpoint',
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (res) {
                console.log(res)
            }
        })
    })
})