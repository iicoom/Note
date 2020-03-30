// prepend
<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
$( ".inner" ).prepend( "<p>Test</p>" );

<h2>Greetings</h2>
<div class="container">
  <div class="inner">
    <p>Test</p>
    Hello
  </div>
  <div class="inner">
    <p>Test</p>
    Goodbye
  </div>
</div>

// append
<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
$( ".inner" ).append( "<p>Test</p>" );

<h2>Greetings</h2>
<div class="container">
  <div class="inner">
    Hello
    <p>Test</p>
  </div>
  <div class="inner">
    Goodbye
    <p>Test</p>
  </div>
</div>


// insertBefore
<div class="container">
  <h2>Greetings</h2>
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>

$( "<p>Test</p>" ).insertBefore( ".inner" );

<div class="container">
  <h2>Greetings</h2>
  <p>Test</p>
  <div class="inner">Hello</div>
  <p>Test</p>
  <div class="inner">Goodbye</div>
</div>

// insertAfter
$( "h2" ).insertAfter( $( ".container" ) );

<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
<h2>Greetings</h2>