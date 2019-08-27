export abstract class Component {
    data: any = null;
    $el: HTMLElement = document.createElement("div");

    protected template (data: any) {
        return ``;
    }

    setData (data: any) {
        this.data = data;
    }

    render($target: HTMLElement) {
        this.$el.innerHTML = this.template(this.data);
        $target.append(this.$el.firstElementChild as HTMLElement);
    }
}
