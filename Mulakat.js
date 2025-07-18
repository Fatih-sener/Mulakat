class CanvasManager {
      constructor(canvasElement) {
        this.canvas = canvasElement;
        this.boxes = [];
        this.boxSize = 100;

        this.canvas.addEventListener('click', (e) => this.addBox(e));
        window.addEventListener('resize', () => this.rearrange());
      }

      addBox() {
        const box = document.createElement('div');
        box.classList.add('box');
        this.canvas.appendChild(box);
        this.boxes.push(box);
        this.rearrange();
      }

      rearrange() {
        const canvasWidth = this.canvas.clientWidth;
        const boxesPerRow = Math.floor(canvasWidth / this.boxSize) || 1;

        this.boxes.forEach((box, index) => {
          const x = (index % boxesPerRow) * this.boxSize;
          const y = Math.floor(index / boxesPerRow) * this.boxSize;
          box.style.left = `${x}px`;
          box.style.top = `${y}px`;
        });

        // Canvas yüksekliğini otomatik ayarlamak istersen:
        const totalRows = Math.ceil(this.boxes.length / boxesPerRow);
        this.canvas.style.height = `${totalRows * this.boxSize}px`;
      }
    }

    const canvasElement = document.getElementById('canvas');
    new CanvasManager(canvasElement);