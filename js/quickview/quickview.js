/**
 * Created by Gia Hoang on 10/9/15.
 */

var $jQ = jQuery.noConflict();
$jQ(document).ready(function(){
    $jQ('body').append('<div class="modal fade" id="quickViewModal" role="dialog"></div>');
    $jQ('.quick-view-link').one('click', function(e) {
        var quickUrl = $jQ(this).data('url');
        $jQ.get(quickUrl, function(data) {
            $jQ('body').find('#quickViewModal').empty();
            $jQ('body').find('#quickViewModal').append(data);
        });
        e.preventDefault();
    });
});
