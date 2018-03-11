$(document).ready(function () {
    $(".light").click(function () {
        var $this = $(this);
        var dark = 'dark';
        $this.toggleClass(dark);
        if($this.hasClass(dark)){
            $this.text('Turn on!');
        } else {
            $this.text('Turn off!');
        }
    });
});
