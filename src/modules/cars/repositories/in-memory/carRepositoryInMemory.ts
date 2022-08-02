import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarRepositoryMemory implements ICarsRepository {
    cars: Car[] = []; 
    async create({brand, category_id, daily_rate, name, license_plate, fine_amount, description}: ICreateCarDTO): Promise<void> {
        const car = new Car();

        Object.assign(car, {
            brand, category_id, daily_rate, name, license_plate, fine_amount, description
        });

        this.cars.push(car);
    }
}

export { CarRepositoryMemory };