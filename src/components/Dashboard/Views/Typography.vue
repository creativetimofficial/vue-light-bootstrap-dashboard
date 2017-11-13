<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Light Bootstrap Table Heading</h4>
              <p class="card-category">Created using Roboto Font Family</p>
            </template>
            <div class="typo-line">
              <h1><p class="category">Header 1</p>Light Bootstrap Table Heading </h1>
            </div>

            <div class="typo-line">
              <h2><p class="category">Header 2</p>Light Bootstrap Table Heading</h2>
            </div>
            <div class="typo-line">
              <h3><p class="category">Header 3</p>Light Bootstrap Table Heading</h3>
            </div>
            <div class="typo-line">
              <h4><p class="category">Header 4</p>Light Bootstrap Table Heading</h4>
            </div>
            <div class="typo-line">
              <h5><p class="category">Header 5</p>Light Bootstrap Table Heading</h5>
            </div>
            <div class="typo-line">
              <h6><p class="category">Header 6</p>Light Bootstrap Table Heading</h6>
            </div>
            <div class="typo-line">
              <p><span class="category">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
              </p>
            </div>
            <div class="typo-line">
              <p class="category">Quote</p>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
                <small>
                  Steve Jobs, CEO Apple
                </small>
              </blockquote>
            </div>

            <div class="typo-line">
              <p class="category">Muted Text</p>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
              </p>
            </div>
            <div class="typo-line">
              <!--
               there are also "text-info", "text-success", "text-warning", "text-danger" clases for the text
               -->
              <p class="category">Coloured Text</p>
              <p class="text-primary">
                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
              </p>
              <p class="text-info">
                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
              </p>
              <p class="text-success">
                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
              </p>
              <p class="text-warning">
                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
              </p>
              <p class="text-danger">
                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
              </p>
            </div>

            <div class="typo-line">
              <h2><p class="category">Small Tag</p>Header with small subtitle <br>
                <small>".small" is a tag for the headers</small>
              </h2>
            </div>
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    }
  }

</script>
<style>

</style>
