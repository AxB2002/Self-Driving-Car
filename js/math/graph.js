class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }
  // === Add Points === //
  addPoint(point) {
    this.points.push(point);
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }

  // === Add Segments === //
  addSegment(seg) {
    this.segments.push(seg);
  }

  // === Drawing === //
  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
