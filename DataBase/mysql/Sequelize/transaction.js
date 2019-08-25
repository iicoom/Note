class ChallengeMap extends Base {
    constructor() {
        super(ChallengeMapModel);
    }

    async create({ class_id, name, comment, desc, challenges }) {
        let transaction = await sequelize.transaction();

        try {
            let tasks = challenges.map( data => ChallengeModel.create({ ...data, class_id }, { transaction }));

            let result = await Promise.all(tasks);

            let ids = result.map(item => item.id);

            let data = { class_id, name, comment, desc, challenges: ids }

            let map = await ChallengeMapModel.create(data, { transaction });

            return map;
        } catch (e) {
            logger.error(e.message);

            await transaction.rollback();

            throw new Error(e.message);
        }
    }
}