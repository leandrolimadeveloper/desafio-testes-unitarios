import exp from "constants";
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ICreateUserDTO } from "../createUser/ICreateUserDTO";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";
import { ShowUserProfileError } from "./ShowUserProfileError";

let createUserUseCase: CreateUserUseCase;
let showUserProfileUseCase: ShowUserProfileUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;

describe("Show a user profile", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    showUserProfileUseCase = new ShowUserProfileUseCase(
      inMemoryUsersRepository
    );
  });

  it("should be able to show a user profile", async () => {
    const user: ICreateUserDTO = {
      name: "Rena Roberson",
      email: "lesmid@rela.cn",
      password: "pass123",
    };

    await createUserUseCase.execute(user);

    const userCreated = await inMemoryUsersRepository.findByEmail(user.email);

    const isAUser = await showUserProfileUseCase.execute(
      String(userCreated?.id)
    );

    expect(userCreated).toBeDefined();
    expect(isAUser.id).toEqual(userCreated?.id);
  });

  it("should not be able to show a user profile if it doesn't exist", async () => {
    const user = {
      name: "Erik Andrews",
      email: "aboajikek@hofuba.tw",
      password: "pass123",
    };

    await createUserUseCase.execute(user);

    const userCreated = await inMemoryUsersRepository.findByEmail(user.email);

    expect(async () => {
      await showUserProfileUseCase.execute("id-that-not-exists-123");
    }).rejects.toBeInstanceOf(ShowUserProfileError);
  });
});
