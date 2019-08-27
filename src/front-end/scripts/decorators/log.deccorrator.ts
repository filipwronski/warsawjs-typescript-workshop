interface Descriptor {
    value: any;
    writable: boolean;
    configurable: boolean;
    get: () => void;
    set: () => void;
}

// method decorator
export function log(instance: any, property: string, descriptor: any) {
    const fn = instance[property];
    descriptor.value = function (...args: any[]) {
        const result = fn.call(this, ...args);
        console.log("Result", result, property);
        return result;
    };
}
