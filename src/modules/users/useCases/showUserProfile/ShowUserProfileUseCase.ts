import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const id = user_id;
    const findIdUser = this.usersRepository.findById(id);

    if (!findIdUser) {
      throw new Error("Mensagem do erro");
    }

    return findIdUser;
  }
}

export { ShowUserProfileUseCase };
