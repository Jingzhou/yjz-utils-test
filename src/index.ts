class Person {
    name: string
    age: number
    sex: number
    constructor(name:string,age:number,sex:number) {
        this.name = name
        this.age = age
        this.sex = sex
    }
    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }
}

export default Person
