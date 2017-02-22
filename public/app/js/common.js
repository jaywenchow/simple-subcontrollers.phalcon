/**
 * Created by limx on 2017/1/27.
 */
jQuery.alert = function (msg, type, callback) {
    if (typeof type == "undefined") type = "success";
    var html = "";
    html += '<div id="alert" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">';
    html += '<div class="modal-dialog modal-sm" role="document">';
    html += '<div class="alert alert-' + type + '" role="alert">' + msg + '</div>';
    html += '</div>';
    html += '</div>';
    $("#modal").html(html);
    $('#alert').modal();
    $('#alert').on('hidden.bs.modal', function (e) {
        $('.modal-backdrop').remove();
        if (typeof callback == "function") {
            callback();
        }
    });
};
jQuery.confirm = function (title, msg, yesCallback, noCallback) {
    var html = "";
    html += '<div class="modal fade" id="alert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
    html += '<div class="modal-dialog" role="document">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    html += '<h4 class="modal-title" id="myModalLabel">' + title + '</h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += msg;
    html += '</div>';
    html += '<div class="modal-footer">';
    html += '<button type="button" class="btn btn-default" data-dismiss="modal" id="confirmNo">取消</button>';
    html += '<button type="button" id="confirmYes" data-dismiss="modal" class="btn btn-primary">确认</button>';

    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#modal").html(html);
    $('#alert').modal();

    $('#alert').on('hidden.bs.modal', function (e) {
        $('.modal-backdrop').remove();
    });
    if (typeof yesCallback == "function") {
        $("#confirmYes").on('click', function () {
            yesCallback();
        });
    }
    if (typeof noCallback == "function") {
        $("#confirmNo").on('click', function () {
            noCallback();
        });
    }
};
jQuery.success = function (msg, callback) {
    jQuery.alert(msg, "success", callback);
};
jQuery.info = function (msg, callback) {
    jQuery.alert(msg, "info", callback);
};
jQuery.warn = function (msg, callback) {
    jQuery.alert(msg, "warning", callback);
};
jQuery.error = function (msg, callback) {
    jQuery.alert(msg, "danger", callback);
};
jQuery.setSideBar = function (index) {
    $(".nav-sidebar>li").eq(index).addClass("active");
};