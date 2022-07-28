import { UserRepository } from "src/modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "src/modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "src/modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "src/modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ICategoriesRepository } from "src/modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepository } from "src/modules/cars/repositories/ISpecificationRepository";
import { container } from 'tsyringe';


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
  );
  
  container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationRepository
  );


  container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UserRepository
  )