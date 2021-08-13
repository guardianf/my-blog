<template>
  <canvas ref="canvas"/>
</template>

<script>
const Heart = (x, y) => {
}

export default {
  name: 'Heart',
  data() {
    return {
      hearts: [],
      canvas: null,
      ctx: null,
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = "red";
    this.ctx.shadowBlur = 25;
    this.ctx.shadowColor = "hsla(0, 100%, 60%, 0.5)";

    requestAnimationFrame(this.render)
  },
  computed: {
    ww() {
      return window.innerWidth;
    },
    wh() {
      return window.innerHeight;
    },
    precision() {
      return 100;
    },
    Heart() {
      const self = this;
      const Heart = function(x, y) {
          this.x = x || Math.random() * self.ww;
          this.y = y || Math.random() * self.wh;
          this.size = Math.random() * 2 + 1;
          this.shadowBlur = Math.random() * 10;
          this.speedX = (Math.random() + 0.2 - 0.6) * 8;
          this.speedY = (Math.random() + 0.2 - 0.6) * 8;
          this.speedSize = Math.random() * 0.05 + 0.01;
          this.opacity = 1;
          this.vertices = [];
          for (var i = 0; i < self.precision; i++) {
            var step = (i / self.precision - 0.5) * (Math.PI * 2);
            var vector = {
              x : (15 * Math.pow(Math.sin(step), 3)),
              y : -(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step)) / (self.wh / self.ww * 2)
            }
            this.vertices.push(vector);
          }
      }
      Heart.prototype.draw = function() {
          this.size -= this.speedSize;
          this.x += this.speedX;
          this.y += this.speedY;
          self.ctx.save();
          self.ctx.translate(-1000,this.y);
          self.ctx.scale(this.size, this.size);
          self.ctx.beginPath();
          for (var i = 0; i < self.precision; i++) {
            var vector = this.vertices[i];
            self.ctx.lineTo(vector.x, vector.y);
          }
          self.ctx.globalAlpha = this.size;
          self.ctx.shadowBlur = Math.round((3 - this.size) * 10);
          self.ctx.shadowColor = "hsla(0, 100%, 60%,0.5)";
          self.ctx.shadowOffsetX = this.x + 1000;
          self.ctx.globalCompositeOperation = "screen"
          self.ctx.closePath();
          self.ctx.fill()
          self.ctx.restore();
      }
      return Heart;
    }
  },
  methods: {
    render(a) {
      requestAnimationFrame(this.render);
      this.hearts.push(new this.Heart())
      this.ctx.clearRect(0, 0, this.ww, this.wh);
      for (var i = 0; i < this.hearts.length; i++) {
        this.hearts[i].draw();
        if(this.hearts[i].size <= 0){
          this.hearts.splice(i,1);
          i--;
        }
      }
    }
  }
}
</script>
<style lang="scss">
</style>
